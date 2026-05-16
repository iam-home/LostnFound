const supabaseUrl = 'SCRET_REMOVED';
const supabaseKey = 'SCRET_REMOVED';

const client = supabase.createClient(supabaseUrl, supabaseKey);

async function sighOut() {
    await client.auth.sighOut();
    checkLogin();
}

async function checkLogin() {
    console.log("checkLogin test");

    const { data: { session } } = await client.auth.getSession();

    if (session) { // 로그인함
        return true;
    } else { // 로그인안함
        return false;
    }
}

function init() {
    checkLogin();
}

function signInWithGoogle() { // google cloud console에 localhost:5500 써놨는데 실제로 열리는 건 로컬호스트 아님. 127 어쩌고 뜨잖음. 그래서 안될 수도 있으니까 알아서 고쳐보셈. 난 머리아파서 더 안 할거임
    console.log("login func test");
}


// function signInWithEmail() {}
// function signInWithKakao() {}
// function signInWithPhoneNumber() {}
// function signInWithApple() {}