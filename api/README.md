curl http://localhost:3000/memos -X POST -H "Content-Type: application/json" -d '{"name": "second", "description": "aaaaa"}'
curl http://localhost:3000/memos/1 -X PUT -H "Content-Type: application/json" -d '{"name": "updated", "description": "aaaaa_updated"}'
curl http://localhost:3000/memos/1 -X DELETE -H "Content-Type: application/json"

migrate: bundle exec rails appengine:exec -- bundle exec rails db:migrate
