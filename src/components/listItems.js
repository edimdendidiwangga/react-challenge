import React from 'react';

class ListItmes extends React.Component {
	constructor(props) {
		super(props)
	}

	render(){
		return(
			<div>
			<table >
				<thead>
					<tr>
						<th>
							No
						</th>
						<th>
							Author
						</th>
						<th>
							Title
						</th>
						<th>
							Description
						</th>
						<th>
							Url
						</th>
						<th>
							PublishedAt
						</th>
					</tr>
				</thead>
				<tbody>
				{ this.props.data.map((item, index)=>{
						return (
							<tr key={index}>
								<td>
									{index}
								</td>
								<td>
									{item.author}
								</td>
								<td>
									{item.title}
								</td>
								<td>
									{item.description}
								</td>
								<td>
									{item.url}
								</td>
								<td>
									{item.publishedAt}
								</td>
							</tr>
						)
					})
				}
				</tbody>
			</table>
			</div>
		)
	}
}

export default ListItmes
