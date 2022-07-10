function handleCredentialResponse(response) {
  const data = jwt_decode(response.credential);
  console.log(data);

  fullName.textContent = data.name;
  sub.textContent = data.sub;
  email.textContent = data.email;
  picture.setAttribute("src", data.picture);
}
window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "574537547862-o2896t9u25ngo7k6nr7kub61mjid3d17.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById("buttonDiv"),
    { theme: "outline", size: "large" } // customization attributes
  );
  google.accounts.id.prompt(); // also display the One Tap dialog
};
