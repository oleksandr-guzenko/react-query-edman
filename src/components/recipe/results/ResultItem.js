import React from 'react'

function ResultItem({item}) {
    const digests = item.digest;

    return (
        <div className="rounded-2 border shadow my-4">
            <div className="row p-2">
                <div className="col-lg-4">
                    <img src={item.image} alt="" className="w-100" />
                </div>
                <div className="col-lg-8">
                    <div className="h6 fw-bolder">{item.label}</div>
                    <div className="text-muted">
                        {item.dietLabels.join(' • ').replaceAll('-', ' ')} • {item.healthLabels.join(' • ').replaceAll('-', ' ')}
                    </div>
                </div>
            </div>
            <div className="bg-light border-top py-3">
                <div className="row">
                    <div className="col-lg-4 text-center">
                        <div className="small fw-bold text-muted">{item.yield} servings</div>
                        <div><span className="h1">{Math.floor(item.calories / item.yield)}</span> <span className="fw-bold text-muted">kcal</span></div>
                    </div>
                    <div className="col-lg-4">
                        <div className="px-3">
                            <div className="d-flex justify-content-between" style={{height: '27px', lineHeight: '27px'}}>
                                <div>
                                    <span className="text-success fw-bold" style={{fontSize: '18px'}}>•</span>
                                    <span className="small"> PROTEIN</span>
                                </div>
                                <div className="fw-bold small text-muted">
                                    {Math.floor(digests[2].total)} g
                                </div>
                            </div>
                            <div className="d-flex justify-content-between" style={{height: '27px', lineHeight: '27px'}}>
                                <div>
                                    <span className="text-warning fw-bold" style={{fontSize: '18px'}}>•</span>
                                    <span className="small"> FAT</span>
                                </div>
                                <div className="fw-bold small text-muted">
                                    {Math.floor(digests[0].total)} g
                                </div>
                            </div>
                            <div className="d-flex justify-content-between" style={{height: '27px', lineHeight: '27px'}}>
                                <div>
                                    <span className="text-danger fw-bold" style={{fontSize: '18px'}}>•</span>
                                    <span className="small"> CARB</span>
                                </div>
                                <div className="fw-bold small text-muted">
                                    {Math.floor(digests[1].total)} g
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="px-3">
                            { digests.slice(3, 9).map((value, index) => (
                                <div className="d-flex justify-content-between" key={`${item.label}-${index}`}>
                                    <div>{value.label}</div>
                                    <div className="fw-bold">{Math.floor(value.total)} mg</div>
                                </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResultItem