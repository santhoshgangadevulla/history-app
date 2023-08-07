import './index.css'

const HistoryItem = props => {
  const {historyItem, onDeleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const onClickDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="history-item">
      <p className="time">{timeAccessed}</p>
      <div className="details-wrapper">
        <div className="title-wrapper">
          <img src={logoUrl} alt="domain logo" className="page-icon" />
          <p className="page-title">{title}</p>
          <p className="page-domain">{domainUrl}</p>
        </div>
        <div>
          <button
            style={{
              backgroundColor: 'transparent',
              outline: 'none',
              border: 'none',
            }}
            type="button"
            data-testid="delete"
            onClick={onClickDelete}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              style={{cursor: 'pointer'}}
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default HistoryItem
