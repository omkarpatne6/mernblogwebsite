import React from "react";
import { Container, Spinner, Card, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import axios from 'axios';

const Home = () => {
	const [state, newstate] = useState([]);

	const [load, newload] = useState(true);

	useEffect(() => {
		const url = "http://localhost:8000/fetchdata";

		fetch(url)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				newstate(data);
				newload(false);
			});
	}, []);

	const handleDeleteBlog = (id) => {
		axios
			.delete(`http://localhost:8000/deleteblog/${id}`)
			.then(res => {
				alert(res?.data?.message);
				console.log(res?.data?.message);
				window.location.reload();
			})
			.catch(err => {
				console.log(err);
			});
	}

	const BlogHtmlContent = ({ content }) => {
        return <div dangerouslySetInnerHTML={{ __html: content }} />;
    }

	return (
		<>
			<Container>
				{load ? (
					<Spinner
						animation="grow"
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							margin: "auto",
							backgroundColor: "#1b8b00",
							backgroundImage:
								"linear-gradient(314deg, #23c000 0%, #88ff00 74%)",
						}}
					/>
				) : (
					<Row>
						{state.map((item) => {
							return (
								<Col xs={12} key={item._id}>
									<Card
										className="px-5 py-2 mb-4"
										style={{
											background: "transparent",
											border: "none",
											borderRadius: "10px",
											boxShadow: "0px 5px 20px rgba(0,0,0)",
										}}
									>
										<div className="text-end flex">
											<Link
												className="editBtn text-primary"
												to={`/editblog/${item.slug}`}
												style={{
													textDecoration: "none",
													fontWeight: "700",
													color: "#fff"
												}}
											>
												<FontAwesomeIcon icon={faPenToSquare} />
											</Link>

											<button onClick={() => handleDeleteBlog(item._id)} className="deleteBtn">
												<FontAwesomeIcon icon={faTrash} />
											</button>
										</div>

										<Card.Body className="px-0 py-0">
											<h2>
												<Link
													to={`/details/${item.slug}`}
													style={{
														textDecoration: "none",
														fontWeight: "700",
														color: "#fff",
														display: "block",
													}}
												>
													{item.name}
												</Link>
											</h2>

											<p className="text-secondary">{item?.datestring}</p>

											<Card.Text>
												Some quick example text to build on the card title and
												make up the bulk of the card's content.
											</Card.Text>

											<p>
												<Link to={`/details/${item.slug}`}>Read more</Link>
											</p>
										</Card.Body>
									</Card>
								</Col>
							);
						})}
					</Row>
				)}
			</Container>
		</>
	);
};

export default Home;
