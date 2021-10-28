const Logo = ({ width, height, color }) => {
	return (
		<div className="sidebar-logo">
			<svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M24.7 30.52c.5.83 1.7.83 2.18 0l14-24.26a1.25 1.25 0 0 0-1.08-1.88H11.8a1.25 1.25 0 0 0-1.09 1.88l2.15 3.72H2.2a1.25 1.25 0 0 0-1.08 1.88l14 24.26c.49.84 1.7.84 2.18 0l5.33-9.23 2.09 3.63Zm-2.08-3.63 8.67-15.03a1.25 1.25 0 0 0-1.08-1.88H12.85l9.77 16.91Z" fill={color}/></svg>
		</div>
	)
}

export default Logo
