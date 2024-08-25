<!DOCTYPE html>
<html lang="en">
<head>
	<script type="text/javascript">
		var text = 3;
	</script>
	<script type="text/javascript" src="/new/JS/addjs.js"></script>
	<?php include 'HTML/link.html'; ?>
	<title>
		Bryan Christy
	</title>
</head>
<body lang="en">
	<?php include ('HTML/head.html'); ?>
	<div class="image">
		<img src="Utilities/forest.jpg" draggable="false" id="forest" oncontextmenu="return false">
	</div>
	<div id="bryan">
		<div id="line6" class="inline" value="bryan"></div>
		<br>
		<div id="line7" class="inline" value="christy"></div>
	</div>
	<div id="arrow">
		<a href="#down"><i class="bi bi-chevron-bar-down color" style="font-size: 5vh; font-weight: 100px;"></i></a>
	</div>
	<div  id="down" class="card">
		<div class="card-header">
			<div class="jumbotron text-center" style="text-transform: uppercase;">
				<h1 class="display-3" style="font-size: 4rem!important">
					<div id="line8" class="inline display-3" value="about me"></div>
				</h1>
			</div>
		</div>
		<div class="card-body" style="margin-bottom: 3rem">
			<div class="row" style="padding-top: 5rem">
				<?php include 'bin/bio.svg'; ?>
				<div class="col-sm-7">
					<div class="display-5" style="margin-bottom: 1rem;">
						<h2><div id="line9" class="inline thin display-5" value="bryan christy"></div></h2>
					</div>
					<div id="line10" class="inline" value="about-bryan christy"></div>
				</div>
			</div>
			<div class="row" style="padding-top: 5rem">
				<div class="col-sm-7">
					<div class="display-5" style="margin-bottom: 1rem">
						<div id="line11" class="inline thin display-5" value="achievements"></div>
					</div>
					<div id="line12" class="inline" value="des-achievemts"></div>
				</div>
				<?php include 'bin/achi.svg'; ?>
			</div>
			<div class="row" style="padding-top: 5rem">
				<?php include 'bin/work.svg'; ?>
				<div class="col-sm-7">
					<div class="display-5" style="margin-bottom: 1rem">
						<div id="line13" class="inline thin display-5" value="works"></div>
					</div>
					<div id="line14" class="inline" value="des-works"></div>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="row" style="margin-top: 5rem; text-align: center;">
			<div class="col-sm-3 bl">
				<h4>
					<i class="bi bi-images circle"></i><br><br>
					<div id="line15" class="inline" value="digital art"></div>
				</h4>
				<p class="font">
					<div id="line16" class="inline" value="des-digital art"></div><br><br>
					<a href="/new/pages/criat">
						<div class="learn">
							<font class="font1">
								<div id="line17" class="inline" value="spot now"></div>
								<i class="bi bi-arrow-right hide"></i>
							</font>
						</div>
					</a>
				</p>
			</div>
			<div class="col-sm-3 bl">
				<h4>
					<i class="fas fa-server circle"></i><br><br>
					<div id="line18" class="inline" value="websites"></div>
				</h4>
				<p class="font">
					<div id="line19" class="inline" value="des-websites"></div><br><br>
					<a href="/new/pages/criat">
						<div class="learn">
							<font class="font1">
								<div id="line20" class="inline" value="browse"></div>
								<i class="bi bi-arrow-right hide"></i>
							</font>
						</div>
					</a>
				</p>
			</div>
			<div class="col-sm-3 bl">
				<h4>
					<i class="bi bi-youtube circle"></i><br><br>
					<div id="line21" class="inline" value="videos"></div>
				</h4>
				<p class="font">
					<div id="line22" class="inline" value="des-videos"></div><br><br>
					<a href="/new/pages/criat">
						<div class="learn">
							<font class="font1">
								<div id="line23" class="inline" value="watch now"></div>
								<i class="bi bi-arrow-right hide"></i>
							</font>
						</div>
					</a>
				</p>
			</div>
		</div>
	</div>
	<?php include 'html/cookie.html'; ?>
	<?php include 'HTML/foot.html'; ?>
</body>
</html>