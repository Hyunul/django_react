import React from "react";
import axios from "axios";

function RestAPI() {
    // const [text, setText] = useState([]);

    return (
        <div>
            <h1>RestAPI Demo</h1>
            <div className="btn-primary">
                <button onClick={() => {
                    axios.get("http://127.0.0.1:8000/post/list/", {
                        // title: "test",
                        // content: "test",
                    })
                        .then(function (response) {
                            console.log(response);
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }}>POST</button>
            </div>
        </div>
    )
}

export default RestAPI;