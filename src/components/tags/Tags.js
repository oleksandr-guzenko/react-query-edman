import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classnames from "classnames";

import TagItem from "./TagItem";
import { 
  addTag
} from "../../actions/tagActions";

/** 
 * display tags added by users
 * @component 
 */
function Tags() {
  // getTags();
  const allTags = useSelector(state => state.tags.tags);
  const { loading, errors } = useSelector(state => state.tags);
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  const [orders, setOrders] = useState({
    label: false,
    description: false,
    active: false,
    createdBy: false,
    dateAdded: false
  }); // fields sort info
  const [field, setField] = useState('');
  const [tags, setTags] = useState([]);
  const toastr = window.toastr;
  
  const tagItems = tags.map((value, index) => <TagItem tag={value} index={index} key={value.id} />)

  const closeModal = () => {
    document.getElementById('tag-modal').style.display = 'none';
    document.getElementsByClassName('modal-backdrop')[0].remove();
  }

  const onAddTag = () => {
    const newTag = {
      label,
      description
    }
    const loadingElement = document.getElementById('save-loading');

    addTag(newTag, loadingElement, closeModal, toastr);
  }

  const onSort = (fieldname) => {
    setField(fieldname);

    const newTags = tags;

    if(orders[fieldname]) newTags.sort((a, b) => String(a[fieldname]).localeCompare(String(b[fieldname])));
    else newTags.sort((a, b) => String(b[fieldname]).localeCompare(String(a[fieldname])));

    setOrders({ ...orders, [fieldname]: !orders[fieldname] });
    setTags([ ...newTags ]);
  }

  const onSearch = (qstring) => {
    const newTags = allTags.filter(value => value.label.toLowerCase().search(qstring.toLowerCase()) !== -1);

    setTags(newTags);
  }

  const showSortIcon = (fieldname) => {
    if(fieldname === field) {
      if(orders[field]) return <span className="fa fa-caret-down"></span>;
      else return <span className="fa fa-caret-up"></span>;
    } else return <></>;
  }

  useEffect(() => {
    toastr.options = {
      "closeButton": true,
      "debug": false,
      "newestOnTop": true,
      "progressBar": false,
      "positionClass": "toast-top-right",
      "preventDuplicates": false,
      "onclick": null,
      "showDuration": "300",
      "hideDuration": "1000",
      "timeOut": "2000",
      "extendedTimeOut": "1000",
      "showEasing": "swing",
      "hideEasing": "linear",
      "showMethod": "fadeIn",
      "hideMethod": "fadeOut"
    };
  }, [])

  useEffect(() => {
    setTags(allTags);
  }, [allTags])

  return (
    <div className="mt-5 pt-5">
      <div className="container py-5">
        <div className="clearfix mb-3">
          <div className="float-start" style={{position: 'relative'}}>
            <input
              className="form-control border-secondary"
              name="search"
              id="search"
              type="text"
              placeholder="Search Tags"
              style={{paddingLeft: '30px'}}
              onChange={e => onSearch(e.target.value)}
            />
            <span 
              className="fa fa-search text-muted" 
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px'
              }}>
            </span>
          </div>
          <div className="float-end">
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#tag-modal"><span className="fa fa-plus"></span> Add Tag</button>

            {/* Start Modal To Add New Tag */}
            <div className="modal" id="tag-modal">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title">Add New Tag</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                  </div>

                  <div className="modal-body">
                    <div className="form-group">
                      <label htmlFor="label" className="mb-2">
                        Label <span className="text-danger">*</span>
                      </label>
                      <input 
                        type="text" 
                        className={classnames("form-control mb-3", {'border-danger': errors.label})}
                        placeholder="Enter new tag" 
                        value={label} 
                        name="label" 
                        onChange={e => setLabel(e.target.value)} 
                      />
                      {errors.label && <p className="text-danger">{errors.label}</p>}
                    </div>
                    <div className="form-group">
                      <label htmlFor="description" className="mb-2">Description</label>
                      <textarea 
                        name="description" 
                        id="description" 
                        rows="5"
                        className="form-control mb-3"
                        onChange={e => setDescription(e.target.value)}
                        placeholder="Enter description"
                        value={description}
                      />
                    </div>
                    <div className="d-grid">
                    <button className="btn btn-block text-center btn-primary" onClick={() => onAddTag()}>
                      Save <span id="save-loading" className="fa fa-spinner fa-spin" style={{display: 'none'}}></span>
                    </button>
                    </div>
                  </div>
                {/* End Modal To Add New Tag */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-secondary rounded-3 pt-3 pb-3 pb-1 px-3">
          {/* Start Tag List */}
          <table className="table table-borderless mb-0" id="tag-table">
            <thead className="text-muted">
              <tr>
                <th className="fw-normal">#</th>
                <th className="fw-normal" onClick={e => onSort('label')}>
                  Label {showSortIcon('label')}
                </th>
                <th className="fw-normal" onClick={e => onSort('description')}>
                  Description {showSortIcon('description')}
                </th>
                <th onClick={e => onSort('active')} className="d-none d-sm-table-cell fw-normal" style={{width: '94px'}}>Active {showSortIcon('active')}</th>
                <th className="fw-normal" onClick={e => onSort('createdBy')}>Created By</th>
                <th onClick={e => onSort('dateAdded')} className="d-none d-md-table-cell fw-normal">Date Added</th>
                <th className="fw-normal" style={{width: '115px'}}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tagItems}
            </tbody>
          </table>
          {/* End Tag List */}
          <div className="text-center text-muted h1 mb-0">
            {loading && <div className="border-top border-secondary py-3"><span className="fa fa-spinner fa-spin"></span></div>}
            {!loading && tags.length === 0 && <div className="fw-light border-top border-secondary py-3">No Tags</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tags