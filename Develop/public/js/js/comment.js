async function commentFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('input[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];


}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);