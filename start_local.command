#!/bin/zsh
cd "${0:A:h}"
open "http://127.0.0.1:4177"
exec python3 -m http.server 4177 --bind 127.0.0.1
