<script>
  import Button from '@smui/button'

	let logginForm = true

	function toggle() {
		logginForm = !logginForm
  }


</script>

<div class="container">
	{#if logginForm}
		<form class="form" id="login">
				<h3 class="form__title">Login</h3>
				<div class="form__message form__message--error"></div>
				<div class="form__input-group">
						<input type="text" class="form__input" autofocus placeholder="Username or email">
						<div class="form__input-error-message"></div>
				</div>
				<div class="form__input-group">
						<input type="password" class="form__input" autofocus placeholder="Password">
						<div class="form__input-error-message"></div>
				</div>
				<Button variant="outlined" type="submit">Continue</Button>
				<p class="form__text">
						<a href="#" class="form__link">Forgot your password?</a>
				</p>
				<button on:click|once={toggle}>
					Not have account?
				</button>
		</form>
	{:else}
	<form class='form' id="createAccount">
			<h3 class="form__title">Create Account</h3>
			<div class="form__message form__message--error"></div>
			<div class="form__input-group">
					<input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username">
					<div class="form__input-error-message"></div>
			</div>
			<div class="form__input-group">
					<input type="text" class="form__input" autofocus placeholder="Email Address">
					<div class="form__input-error-message"></div>
			</div>
			<div class="form__input-group">
					<input type="password" class="form__input" autofocus placeholder="Password">
					<div class="form__input-error-message"></div>
			</div>
			<div class="form__input-group">
					<input type="password" class="form__input" autofocus placeholder="Confirm password">
					<div class="form__input-error-message"></div>
			</div>
			<button class="form__button" type="submit">Continue</button>
			<p>
				<button on:click|once={toggle}>
					Already have account?
				</button>
			</p>
</form>
	{/if}
</div>


<style>

p{
	margin-top: 20px;
}

.container {
    width: 400px;
    max-width: 400px;
    margin: 1rem;
    padding: 2rem;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius);
    background: #ffffff;
}


.container,
.form__input,
.form__button {
    font: 500 1rem 'Quicksand', sans-serif;
}

.form--hidden {
    display: none;
}

.form > *:first-child {
    margin-top: 0;
}

.form > *:last-child {
    margin-bottom: 0;
}

.form__title {
    margin-bottom: 2rem;
    text-align: center;
}

.form__message {
    text-align: center;
    margin-bottom: 1rem;
}

.form__message--success {
    color: var(--color-success);
}

.form__message--error {
    color: var(--color-error);
}

.form__input-group {
    margin-bottom: 1rem;
}

.form__input {
    display: block;
    width: 100%;
    padding: 0.75rem;
    box-sizing: border-box;
    border-radius: var(--border-radius);
    border: 1px solid #dddddd;
    outline: none;
    background: #eeeeee;
    transition: background 0.2s, border-color 0.2s;
}

.form__input:focus {
    border-color: var(--color-primary);
    background: #ffffff;
}

.form__input--error {
    color: var(--color-error);
    border-color: var(--color-error);
}

.form__input-error-message {
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: var(--color-error);
}

.form__button {
    width: 100%;
    padding: 1rem 2rem;
    font-weight: bold;
    font-size: 1.1rem;
    color: #ffffff;
    border: none;
    border-radius: var(--border-radius);
    outline: none;
    cursor: pointer;
    background: var(--color-primary);
}

.form__button:hover {
    background: var(--color-primary-dark);
}

.form__button:active {
    transform: scale(0.98);
}

.form__text {
    text-align: center;
}

.form__link {
    color: var(--color-secondary);
    text-decoration: none;
    cursor: pointer;
}

.form__link:hover {
    text-decoration: underline;
}

</style>

