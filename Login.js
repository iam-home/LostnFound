const supabaseUrl = 'SCRET_REMOVED';
const supabaseKey = 'SCRET_REMOVED';

const client = supabase.createClient(supabaseUrl, supabaseKey);

async function checkLogin() {
  try {
    const { data: { session }, error } = await client.auth.getSession();

    if (error) throw error;

    if (session) { // 로그인함
        return true;
    } else { // 로그인안함
        if ( confirm("로그인 하시겠습니까?") ) {
            signInWithGoogle();
        } else {
            alert("로그인을 하지 않으면 출입이 불가능합니다.");
            document.querySelector("#display").style.display = 'none';
        }
        }

  } catch (err) {
    console.error("error:", err.message);
  }
}

async function signOut() {
      const { error } = await client.auth.signOut();
      if (error) console.error('Logout error:', error.message);
      else {
        location.reload();
      }
    }

async function signInWithGoogle() {
      const { data, error } = await client.auth.signInWithOAuth({
        provider: 'google',
        options: {
      redirectTo: 'http://127.0.0.1:5500/LostnFound/',
      queryParams: {
        prompt: 'select_account',
        access_tpye: 'offline'
      }
    }
      });

      if (error) console.error('error:', error.message);
    }


// // function signInWithEmail() {}
// // function signInWithKakao() {}
// // function signInWithPhoneNumber() {}
// // function signInWithApple() {}



// for test
async function dever() { // 테스트용 이메일 로그인
  try {
    const { data, error } = await client.auth.signInWithPassword({
    email: 'test@gmail.com',
    password: 'uiopui'
  });
  if (error) {
    console.error(error);
    return false;
  }
  return true;
  } catch (e) {
    console.error(e);
    return false;
  }
}