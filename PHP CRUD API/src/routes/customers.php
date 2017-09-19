<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
$app = new \Slim\App;

//Get All customers
$app->get('/api/customers', function(Request $request, Response $response){
	$sql = 'SELECT * FROM customers';
	try{
		$db = new db();
		$db = $db->connect();
		$stmt = $db->query($sql);
		$customers = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($customers);
	}catch(PDOException $e){
		echo "{'error': {'text': '"+$e->getMessage()+"'";
	}
});

//Get a Customer
$app->get('/api/customer/{id}', function(Request $request, Response $response){
	$id = $request->getAttribute('id');
	$sql = "SELECT * FROM customers WHERE id = $id";
	try{
		$db = new db();
		$db = $db->connect();
		$stmt = $db->query($sql);
		$customer = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo json_encode($customer);
	}catch(PDOException $e){
		echo "{'error': {'text': '"+$e->getMessage()+"'";
	}
});

//Add Customer
$app->post('/api/customer/add', function(Request $request, Response $response){
	$name = $request->getParam('name');
	$email = $request->getParam('email');
	$phone = $request->getParam('phone');
	$sql = "INSERT INTO customers(Name, Phone, Email) VALUES(:name, :phone, :email)";
	try{
		$db = new db();
		$db = $db->connect();
		$stmt = $db->prepare($sql);

		$stmt->bindParam(':name', $name);
		$stmt->bindParam(':email', $email);
		$stmt->bindParam(':phone', $phone);

		$stmt->execute();
		echo '{"notice": {"text": "Customer Added"}}';
	}catch(PDOException $e){
		echo "{'error': {'text': '"+$e->getMessage()+"'";
	}
});

//Update Customer
$app->put('/api/customer/update/{id}', function(Request $request, Response $response){
	$id = $request->getAttribute('id');
	$name = $request->getParam('name');
	$email = $request->getParam('email');
	$phone = $request->getParam('phone');
	$sql = "UPDATE customers SET Name = :name, Phone = :phone, Email = :email WHERE id = $id";
	try{
		$db = new db();
		$db = $db->connect();
		$stmt = $db->prepare($sql);

		$stmt->bindParam(':name', $name);
		$stmt->bindParam(':email', $email);
		$stmt->bindParam(':phone', $phone);

		$stmt->execute();
		echo '{"notice": {"text": "Customer Updated"}}';
	}catch(PDOException $e){
		echo "{'error': {'text': '"+$e->getMessage()+"'";
	}
});

//Delete Customer
$app->delete('/api/customer/delete/{id}', function(Request $request, Response $response){
	$id = $request->getAttribute('id');
	$sql = "DELETE FROM customers WHERE id = $id";
	try{
		$db = new db();
		$db = $db->connect();
		$stmt = $db->prepare($sql);
		$stmt->execute();
		$db = null;
		echo '{"notice": {"text": "Customer Deleted"}}';
	}catch(PDOException $e){
		echo "{'error': {'text': '"+$e->getMessage()+"'";
	}
});
