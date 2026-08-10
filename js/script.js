
// Welcome Message
console.log("Welcome to Sariful Islam Official Website");

// Page Loaded
window.onload = function () {
    console.log("Website Loaded Successfully!");
};
/* =========================================
   STEP 8C — SARIF AI INTERACTION
========================================= */

const aiInput = document.getElementById("ai-input");
const aiSend = document.getElementById("ai-send");
const aiMessage = document.querySelector(".ai-message");

function sendMessage() {

    const question = aiInput.value.trim();

    if (question === "") {
        return;
    }

    const userMessage = document.createElement("div");

    userMessage.className = "ai-user-message";

    userMessage.innerHTML = `
        <div class="ai-user-bubble">
            ${question}
        </div>
    `;

    aiMessage.parentElement.insertBefore(
        userMessage,
        document.querySelector(".ai-input-area")
    );

    aiInput.value = "";

    setTimeout(() => {

        const reply = document.createElement("div");

        reply.className = "ai-message";

        reply.innerHTML = `
            <div class="ai-avatar">S</div>

            <div class="ai-bubble">
                <p>
                    I'm currently being developed.
                    Soon, Sarif AI will be connected
                    to an actual AI system and will be
                    able to answer your questions.
                </p>
            </div>
        `;

        aiMessage.parentElement.insertBefore(
            reply,
            document.querySelector(".ai-input-area")
        );

    }, 800);
}

aiSend.addEventListener("click", sendMessage);

aiInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});
