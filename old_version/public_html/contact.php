<!-- contact -->
<?php include('index.php'); ?>

	<div class="row">
		<div class="col-sm-12">
			<div class="banner">
				<img src="../images/heroes/about_contact.jpg" alt="hero image">
			</div>
		</div>	
	</div>

<form method="POST" action="process.php">
	<div class="row">
		<div class="form-group">
			<div class="col-sm-3">
				<label for="lastName">First Name *</label>
			</div>
			<div class="col-sm-9">  
				<input type="text" class="form-control" id="lastName" placeholder="First Name" name="lastName" required>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="form-group">
			<div class="col-sm-3">
				<label for="firstName">Last Name *</label>
			</div>
			<div class="col-sm-9">  
				<input type="text" class="form-control" id="firstName" placeholder="Last Name" name="firstName" required>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="form-group">
			<div class="col-sm-3">
				<label for="exampleInputEmail1">Email address *</label>
			</div>
			<div class="col-sm-9">  
				<input type="email" class="form-control" id="exampleInputEmail1" name="email" placeholder="Email" required>
			</div>
		</div>
	</div>

	<div class="row">
		<div class="form-group">
			<div class="col-sm-3">
				<label for="telephone">Telephone</label>
			</div>
			<div class="col-sm-9">  
				<input type="text" class="form-control" id="telephone" name="phone" placeholder="000-000-0000">
			</div>
		</div>
	</div>

	<div class="row">
		<div class="form-group">
			<div class="col-sm-3">
				<label for="message">Message</label>
			</div>
			<div class="col-sm-9">  
				<textarea placeholder="Message" name="message" id="message" rows="5"></textarea>
			</div>
		</div>
	</div>		
		<button type="submit" class="btn btn-default submitButton">Submit</button>
</form>
<?php include('../deepPageFooter.php'); ?>
