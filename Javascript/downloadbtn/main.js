let downloadBtn = document.getElementById('download_btn');

downloadBtn.addEventListener('click', () => {
    swal({
        title: "Good job!",
        text: "The resume has been loaded successfully.",
        icon: "success",
        button: "Continue",
      });
});