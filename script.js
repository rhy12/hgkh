let ele = document.createElement("div");
ele.classList.add("container", "d-flex", "justify-content-center", "p-5", )
ele.setAttribute("id", "div1");
ele.innerHTML = "10";

document.body.append(ele)

let content = document.getElementById("div1").textContent;

setTimeout(() => {
    ele.innerHTML = --content;
    setTimeout(() => {
        ele.innerHTML = --content;
        setTimeout(() => {
            ele.innerHTML = --content;
            setTimeout(() => {
                ele.innerHTML = --content;
                setTimeout(() => {
                    ele.innerHTML = --content;
                    setTimeout(() => {
                        ele.innerHTML = --content;
                        setTimeout(() => {
                            ele.innerHTML = --content;
                            setTimeout(() => {
                                ele.innerHTML = --content;
                                setTimeout(() => {
                                    ele.innerHTML = --content;
                                    setTimeout(() => {
                                        ele.innerHTML = "HAPPY INDEPENDENCE DAY";
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);