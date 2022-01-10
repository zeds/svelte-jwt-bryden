<script>
	import Button from '/src/shared/Button.svelte';

</script>


<div class="body">
<div class="wrapper">
	<form>
		<h5>お問い合わせ</h5>
		<div class="container">
			<label class="custom-field one">
				<input type="text" placeholder=" " required/>
				<span class="placeholder">First Name</span>
			</label>
		
			<label class="custom-field one">
				<input type="text" placeholder=" " required/>
				<span class="placeholder">Last Name</span>
			</label>
		</div>

		<div class="container">
			<label class="custom-field one">
				<input type="email" placeholder=" " required/>
				<span class="placeholder">Email</span>
			</label>
		
			<label class="custom-field one">
				<input type="tel" placeholder=" "/>
				<span class="placeholder">Phone</span>
			</label>
		</div>

		<div class="container">
			<div class="box">
				<label for="mes">コメントを入力してください</label>
				<textarea id="mes" required></textarea>
			</div>
		</div>

		<Button type="primary" >送信</Button>

	</form>
</div>
</div>


<style>
/*https://www.youtube.com/watch?v=3AK3vspZvvM*/

.body {
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	/*align-items: center;*/
	font-family: sans-serif;
	font-size: 16px;
	margin-top: 50px;
}

*, *::before, *::after {
	box-sizing: border-box;
}

.wrapper{
	width: 80%;
	margin: 0 auto;
	padding: 0;
	align-items: start;
	/*padding: 20px;*/
	/*background: CadetBlue;*/
}

.wrapper h5{
	color: black;
	/*font-size: 3em;*/
	text-align: center;
	margin-bottom: 30px;
}

.container{
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	grid-gap: 20px;
	gap: 20px;
	margin-bottom: 0px;
}

.container .box{
	width: 100%;
	/*position: relative;*/
	padding: 0px;
}

.container .box textarea{
	width: 100%;
	background: transparent;
	border: none;
	outline: none;
	border-bottom: 1px solid gray;
	transition: 0.1s linear;
}

.container .box textarea:focus,
.container .box textarea:valid{
	padding: 10px 10px;
	/*background: rgb(40,205,245);*/
	margin-top: 10px;
}

.container .box textarea:focus ~ label,
.container .box textarea:valid ~ label{
	padding: 0;
}

.container input[type="submit"]{
	background: rgb(40,205,245);
	padding: 15px 30px;
	border: none;
	outline: none;
	border-radius: 10px;
	cursor: pointer;
}



.custom-field {
  position: relative;
  border-top: 20px solid transparent;
  margin-bottom: 5px;
  --field-padding: 12px;
}

.custom-field input {
  border: none;
  -webkit-appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f2f2f2;
  padding: var(--field-padding);
  border-radius: 3px;
  /*width: 250px;*/
  width: 100%;
  outline: none;
	font-size: 1rem;
}

.custom-field .placeholder {
  position: absolute;
  left: var(--field-padding);
  width: calc(100% - (var(--field-padding) * 2));
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  top: 22px;
  line-height: 100%;
  transform: translateY(-50%);
  color: #aaa;
  transition: 
    top 0.3s ease,
    color 0.3s ease,
    font-size 0.3s ease;
}

.custom-field input.dirty + .placeholder,
.custom-field input:focus + .placeholder,
.custom-field input:not(:placeholder-shown) + .placeholder {
  top: -10px;
  color: #222;
}

.custom-field .error-message {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: #d30909;
  color: #fff;
  height: 24px;
}

.custom-field .error-message:empty {
  opacity: 0;
}

/* ONE */
.custom-field.one input {
  background: none;
  border: 2px solid #ddd;
  transition: border-color 0.3s ease;
}

.custom-field.one input + .placeholder {
  left: 8px;
  padding: 0 5px;
}

.custom-field.one input.dirty,
.custom-field.one input:not(:placeholder-shown),
.custom-field.one input:focus {
  border-color: #222;
  transition-delay: 0.1s
}

.custom-field.one input.dirty + .placeholder,
.custom-field.one input:not(:placeholder-shown) + .placeholder,
.custom-field.one input:focus + .placeholder {
  top: 0;
  font-size: 0.8rem;
  color: #222;
  background: #fff;
  width: auto
}

/* TWO */
.custom-field.two input {
  border-radius: 0;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  background:
    linear-gradient(90deg, #222, #222) center bottom/0 0.15em no-repeat,
    linear-gradient(90deg, #ccc, #ccc) left bottom/100% 0.15em no-repeat,
    linear-gradient(90deg, #fafafa, #fafafa) left bottom/100% no-repeat;
  transition: background-size 0.3s ease;
}

.custom-field.two input.dirty,
.custom-field.two input:not(:placeholder-shown),
.custom-field.two input:focus {
  background-size: 100% 0.15em, 100% 0.1em, 100%;
}

/* THREE */
.custom-field.three {
  --draw-duration: 0.1s;
  --draw-color: #222;
  --draw-line-width: 2px;
  --draw-easing: linear;
}

.custom-field.three .border {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: none;
  display: flex;
  align-items: center;
  padding-left: 12px;
  border-radius: 3px;
}

.custom-field.three .border::after, 
.custom-field.three .border::before {
  content: "";
  width: 0;
  height: 0;
  display: inline-block;
  position: absolute;
  border-radius: 3px;
}

.custom-field.three .border::before {
  left: 0;
  bottom: 0;
  border-right: 0px solid var(--draw-color);
  border-bottom: 0px solid var(--draw-color);
  transition: 
    border 0s linear calc(var(--draw-duration) * 4),
    height var(--draw-duration) var(--draw-easing) calc(var(--draw-duration) * 2),
    width var(--draw-duration) var(--draw-easing) calc(var(--draw-duration) * 3);
}

.custom-field.three .border::after {
  right: 0;
  top: 0;
  border-left: 0px solid var(--draw-color);
  border-top: 0px solid var(--draw-color);
  transition: 
    border 0s linear calc(var(--draw-duration) * 2),
    height var(--draw-duration) var(--draw-easing),
    width var(--draw-duration) var(--draw-easing) var(--draw-duration);
}

.custom-field.three input:focus ~ .border::before,
.custom-field.three input:not(:placeholder-shown) ~ .border::before,
.custom-field.three input.dirty ~ .border::before,
.custom-field.three input:focus ~ .border::after,
.custom-field.three input:not(:placeholder-shown) ~ .border::after,
.custom-field.three input.dirty ~ .border::after {
  width: 100%;
  height: 100%;
  border-width: var(--draw-line-width);
}

.custom-field.three input:not(:placeholder-shown) ~ .border::before,
.custom-field.three input.dirty ~ .border::before,
.custom-field.three input:focus ~ .border::before {
  transition-delay: 0s, var(--draw-duration), 0s;
}

.custom-field.three input:not(:placeholder-shown) ~ .border::after,
.custom-field.three input.dirty ~ .border::after,
.custom-field.three input:focus ~ .border::after {
  transition-delay: 
    calc(var(--draw-duration) * 2), 
    calc(var(--draw-duration) * 3), 
    calc(var(--draw-duration) * 2);
}






</style>