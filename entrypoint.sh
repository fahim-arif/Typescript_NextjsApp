#!/bin/sh

echo "Check that we have NEXT_PUBLIC vars"
test -n "$NEXT_PUBLIC_API_SERVER_HOST"

find /app/.next \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#APP_NEXT_PUBLIC_API_SERVER_HOST#$NEXT_PUBLIC_API_SERVER_HOST#g"

echo "Starting Nextjs"
exec "$@"
