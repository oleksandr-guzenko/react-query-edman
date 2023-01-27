import React from 'react'
import classnames from "classnames";

import { updateTag } from "../../actions/tagActions";

/**
 * display a tag item
 * @component
 * @param {Object} tag - tag info
 * @param {number} index - tag order
 */
function TagItem({ tag, index }) {
    const toastr = window.toastr;

    return (
        <tr className={classnames('border-top border-secondary', {'table-active': tag.active, 'text-muted': !tag.active})}>
            <td className="align-middle">{index + 1}</td>
            <td className="align-middle">{tag.label}</td>
            <td className="align-middle">{tag.description}</td>
            <td className="d-none d-sm-table-cell align-middle">{tag.active? 'Enabled' : 'Disabled'}</td>
            <td className="align-middle">{tag.createdBy}</td>
            <td className="d-none d-md-table-cell align-middle">{tag.dateAdded}</td>
            <td className="align-middle">
                <button 
                    className={classnames('btn', {
                        'btn-danger': !tag.active,
                        'btn-success': tag.active
                    })}
                    style={{
                        width: '99px'
                    }}
                    onClick={() => updateTag(tag.id, document.getElementById(`update-${tag.id}`), toastr)}
                >
                    {tag.active? 'Disable' : 'Enable'} {' '}
                    <span 
                        className="fa fa-spinner fa-spin" 
                        id={`update-${tag.id}`}
                        style={{display: 'none'}}
                    ></span>
                </button>
            </td>
        </tr>
    )
}

export default TagItem