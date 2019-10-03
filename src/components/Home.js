import React from 'react'

class Home extends React.Component{

    render(){
        return (
            <section className="intro">
						<header>
							<h1>Chihuahua</h1>
							<p>Look at these babies</p>
							<ul className="actions">
								<li><a href="#first" className="arrow scrolly"><span className="label">Next</span></a></li>
							</ul>
						</header>
						<div className="content">
							<span className="image fill" data-position="center"><img src="https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /></span>
						</div>
			</section>
        )
    }
}

export default Home;