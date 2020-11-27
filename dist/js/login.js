var id = document.querySelector('.user')
var password = document.querySelector('.password')
var login = document.querySelector('.login')



login.onclick = function () {
  var value = id.value;
  if (!getCookie(`${value}`)) {
    alert('账号不存在')
    setCookie({
      key: id.value,
      val: password.value,
      days: 2,
    })
    alert('创建成功')
  }else {
    if (getCookie(`${value}`) === password.value) {
      // console.log('登录成功');
      window.location.href = 'http://localhost:3000/indexAfterLogin.html'
    } else {
      alert('密码错误')
    }
  }
}
