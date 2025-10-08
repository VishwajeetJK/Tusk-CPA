export function onRequest(context) {
  return new Response(null, {
    status: 200,
    headers: {
      'Content-Type': 'text/html',
    },
  });
}

