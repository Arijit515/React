import React from 'react'

function MemoComp({name}) {
  return (
    console.log ('Rendering Memo Component'),
    <div>
      {name}

    </div>
  )
}

export default React.memo(MemoComp)
