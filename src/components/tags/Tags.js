import React from 'react'

function Tags() {
  return (
    <div className="mt-5 pt-5">
      <div className="container py-5">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" data-bs-toggle="tab" href="#tags">Tags</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" href="#recipes">Recipe Tags</a>
          </li>
        </ul>

        <div class="tab-content">
          <div class="tab-pane container active" id="tags">a</div>
          <div class="tab-pane container fade" id="recipes">...</div>
        </div>
      </div>
    </div>
  )
}

export default Tags