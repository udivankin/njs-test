docker run --rm --name njs -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro  -v $(pwd)/test.js:/etc/nginx/test.js:ro -p 8198:80 -p 8199:8190 -d nginx:alpine

docker restart njs

http://localhost:8198/