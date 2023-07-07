import '../../styles/auth.scss'


function signUp() {
    return (
        <div class="sign-container">
            <div class="logo">
                <img src="/logo.png" alt=""/>
                <a href="">if you already have an account just sign in</a>
            </div>
            <div class="form-control">
                <h2>sign up</h2>
                <form action="">
                    <div class="form">
                        <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" "/>
                        <label for="email" class="form__label">name</label>
                    </div>
                    <div class="form">
                        <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" "/>
                        <label for="email" class="form__label">Email</label>
                    </div>
                    <div class="form">
                        <input type="text" id="email" class="form__input" autocomplete="off" placeholder=" "/>
                        <label for="email" class="form__label">password</label>
                    </div>
                    <button class="btn">sign up</button>
                </form>
            </div>
    </div>
    
    )
  }
  
  export default signUp