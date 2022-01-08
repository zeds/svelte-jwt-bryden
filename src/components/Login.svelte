<!--https://www.youtube.com/watch?v=3GsKEtBcGTk-->
<script>
	import { goto } from '$app/navigation';
	import Button from '../shared/Button.svelte';

	let fields = { email: '', password: '' }
	//なにも表示しない状態から、エラーを表示すると、みずらいのでスペースを挿入した
	let errors = { email: '', password: '' }
	let valid = false

	//メールアドレス
	const regex = /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/;

	//form__input--errorをinputのclassに設定すると赤枠が表示されます

	//clicked login button
	const submitHandler = () => {
		valid = true
		// emailは正しいフォーマットか？
		if(!regex.test(fields.email)){
			valid = false
			errors.email = 'emailが正しくありません'
		}else{
			errors.email = ''
		}

		// passwordは6文字以上か？
		if(fields.password.trim().length < 6){
			valid = false
			errors.password = 'パスワードは6文字以上'
		}else{
			errors.password = ''
		}

		if(valid){
			console.log('valid=')
			async function handleLogin() {
        const json = await post(fetch, 'http://localhost:1337/api/auth/local', {
            identifier: username,
            password
        })
        if(json.jwt) {
					console.log(json.jwt)
					browserSet("jwt", json.jwt)
        }
    	}
		}
	}



</script>

<div class="container">

	<form on:submit|preventDefault={submitHandler}>
		<h3 class="form__title">Login</h3>
		<div class="form__message form__message--error"></div>

		<!--email-->
		<div class="form__input-group">
				<input type="text" class="form__input" id="email" autofocus placeholder="Username or email" bind:value={fields.email}>
				<div class="error">{ errors.email }</div>
		</div>

		<!--password-->
		<div class="form__input-group">
				<input type="password" class="form__input" id="password" placeholder="Password" bind:value={fields.password}>
				<div class="error">{ errors.password }</div>
		</div>
		<Button type="primary" >Login</Button>

		<p class="form__text">
				<a href="#" class="form__link">Forgot your password?</a>
		</p>
		<p>
			<a href="/signup">Don't have an account? Create account</a>
		</p>

	</form>
</div>


<style>

.container {
		--color-primary: #009579;
    --color-primary-dark: #007f67;
    --color-secondary: #252c6a;
    --color-error: #cc3333;
    --color-success: #4bb544;
    --border-radius: 4px;

    width: 400px;
    max-width: 400px;
    margin: 1rem;
    padding: 2rem;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    border-radius: var(--border-radius);
    background: #ffffff;
}


.container,
.form__input {
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

/*.error{
	font-weight: bold;
	font-size: 12px;
	color: #d91b42;
}*/

</style>

