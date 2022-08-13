const IconButton = ({children, type, onClick}) => {
  return (
    <button
      className={`${type === 'nav' ? 'icon-btn nav-toggle' : 'icon-btn sidebar-toggle'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default IconButton; 
