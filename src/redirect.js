import React from 'react';

export default function redirect() {
    return (
        <script>
            var hasSlash = (window.location.href.substr(-1) == '/');
            window.location.replace(window.location.href + (hasSlash?'':'/')+'resume');
        </script>
    )
};
