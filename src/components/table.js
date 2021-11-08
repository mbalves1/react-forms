import React from 'react'
import './table.css'
import { Card } from '@material-ui/core'

function Table() {
	const [error, setError] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [items, setItems] = React.useState([]);
  
	// Nota: O array [] deps vazio significa
	// este useEffect será executado uma vez
	// semelhante ao componentDidMount()
	React.useEffect(() => {
	  fetch('http://localhost:3343/users')
		.then(res => res.json())
		.then(
		  (result) => {
			setIsLoaded(true);
			setItems(result);
		  },
		  // Nota: é importante lidar com errros aqui
		  // em vez de um bloco catch() para não receber
		  // exceções de erros reais nos componentes.
		  (error) => {
			setIsLoaded(true);
			setError(error);
		  }
		)
		console.log(items)
	}, [])
  
	if (error) {
	  return <div>Error: {error.message}</div>;
	} else if (!isLoaded) {
	  return <div>Loading...</div>;
	} else {
	  return (
		<div style={{display:'flex', justifyContent: 'center'}}>

			<Card className="content-table scrollbar" style={{boxShadow: '10px 10px 58px', marginTop: '10%', overflowX: 'scroll', overflowY: 'hidden'}} >
				<thead>
					<tr>
						<th>Nome</th>
						<th>Sobrenome</th>
						<th>E-mail</th>
						<th>Telefone</th>
						<th>CEP</th>
						<th>end</th>
						<th>end2</th>
						<th>Data Nascimento</th>
						<th>CPF</th>
						<th>Renda</th>
					</tr>
				</thead>
				<tbody>
					<tr
					className="active-row">
						<td>
							{items.map((item, id) => (
								<div key={id}>
								{item.username}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.sobrenome}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.email}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.telefone}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.cep}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.address}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.addresstwo}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.birth}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.cpf}
								</div>
							))}
						</td>
						<td >
							{items.map((item, id) => (
								<div key={id}>
								{item.pay}
								</div>
							))}
						</td>
					</tr>
				</tbody>
			</Card>
		</div>
	  );
	}
}

export default Table