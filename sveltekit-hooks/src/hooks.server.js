// export async function handle({event, resolve}) {
//   // if (event.url.pathname.startsWith('/custom')) {
//   //   return new Response('This is a custom response from hooks.server.js')
//   // }

//   // event.locals.user = {
//   //   name: 'SvelteKit User'
//   // }

//   // const response = await resolve(event)

//   // response.headers.set("x-custom-header", "potato");
  
//   // return response

//   let page = ''

//   const local = 'zh'

//   const response = await resolve(event, {
//     transformPageChunk: ({ html, done }) => {
//       page += html
//       // console.log(page)
//       if (done){
//         return html.replace('%lang%', local)
//       }
//       return html
//     },
//     filterSerializedResponseHeaders: (name) => {
//       return name.startsWith('x-')
//     },
//     preload: ({ type, path }) => {
//       return type === 'js' && path.includes('/important/')
//     }
//   })

//   return response
// }

// import { sequence } from '@sveltejs/kit/hooks';

// async function first({ event, resolve }) {
//   console.log("first pre-processing");
//   event.locals.user = {
//     name: 'SvelteKit User'
//   }
//   const response = await resolve(event);
//   console.log("first post-processing");
//   return response;
// }

// async function second({ event, resolve }) {
//   console.log("second pre-processing");
//   const response = await resolve(event);
//   response.headers.set("x-custom-header", "potato");
//   console.log("second post-processing");
//   return response;
// }

// export const handle = sequence(first, second);

import { sequence } from "@sveltejs/kit/hooks";

/// type: import('@sveltejs/kit').Handle
async function first({ event, resolve }) {
  console.log("first pre-processing", '1');
  const result = await resolve(event, {
    transformPageChunk: ({ html }) => {
      // transforms are applied in reverse order
      console.log("first transform", '2');
      return html;
    },
    preload: () => {
      // this one wins as it's the first defined in the chain
      console.log("first preload", '3');
    },
  });
  console.log("first post-processing", '4');
  return result;
}

/// type: import('@sveltejs/kit').Handle
async function second({ event, resolve }) {
  console.log("second pre-processing", '5');
  const result = await resolve(event, {
    transformPageChunk: ({ html }) => {
      console.log("second transform", '6');
      return html;
    },
    preload: () => {
      console.log("second preload", '7');
    },
    filterSerializedResponseHeaders: () => {
      // this one wins as it's the first defined in the chain
      console.log("second filterSerializedResponseHeaders", '8');
    },
  });
  console.log("second post-processing", '9');
  return result;
}

export const handle = sequence(first, second);

export async function handleFetch({ event, request, fetch }) {
  if (request.url.startsWith('http')) {
    const url = request.url.replace('http', 'https');
    return new Request(url, request);
  }

  return fetch(request);
}
