import{r as o,j as e,a as N}from"./app-d575b866.js";import{A as S}from"./AuthenticatedLayout-5a4a9f5d.js";import _ from"./SpotifyAuthPopup-43a7e872.js";import{d as E}from"./index-82529175.js";import T from"./PostList-8e79cf84.js";import"./transition-1a053668.js";import"./tmusiclogo-591b3884.js";import"./PostItem-7e945bc5.js";function O({auth:p,posts:b,spotify:l}){const[r,f]=o.useState(""),[u,h]=o.useState(""),[i,c]=o.useState([]),[s,x]=o.useState(null),[g,j]=o.useState(!1);o.useEffect(()=>{const t=l.token,a=l.client_id,n=l.client_secret;console.log("admin dashboard"),t?h(t):window.location.href="/authorize-spotify";var w={method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials&client_id="+a+"&client_secret="+n};fetch("https://accounts.spotify.com/api/token",w).then(m=>m.json()).then(m=>h(m.access_token))},[]);const d=async()=>{try{var t={method:"GET",headers:{"Content-type":"application/json",Authorization:"Bearer "+u}};const n=await(await fetch("https://api.spotify.com/v1/search?q="+r+"&type=track",t)).json();c(n.tracks.items),setIsTracksModalOpen(!0)}catch(a){console.error("Error fetching data",a)}};o.useEffect(()=>{r!==""&&d()},[r,u]),o.useEffect(()=>{r===""&&c([])},[r]);const v=t=>{console.log(t),x({title:t.name,album:t.album.name,artist:t.artists[0].name,album_cover:t.album.images[0].url,user:p.user,preview_url:t.preview_url,description:""}),c([])},y=t=>{t.preventDefault(),console.log(s),E.Inertia.post("/posts",s).then(()=>{window.location.reload()})};return e.jsxs(S,{user:p.user,children:[e.jsx(N,{title:"Admin Dashboard"}),e.jsx("div",{className:"container mx-auto px-8 py-8 ",children:e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"rounded-md border-2 border-gray-300 w-1/2 mr-2",placeholder:"Search For Song",type:"text",onKeyPress:t=>{t.key==="Enter"&&d()},onChange:t=>f(t.target.value)}),e.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",onClick:()=>{d()},children:"Search"})]})}),i.length>0&&e.jsx("div",{className:"container mx-auto px-4 mb-8 p-4",children:e.jsx("div",{className:"grid grid-cols-4 gap-4 mx-2 overflow-y-auto h-auto md:h-96 sm:h-40",children:i&&i.map((t,a)=>e.jsxs("div",{className:"bg-white rounded-lg max-w-xs shadow-lg cursor-pointer",onClick:()=>v(t),children:[e.jsx("img",{className:"w-full object-cover",src:t.album.images[0].url,alt:t.name}),e.jsxs("div",{className:"px-4 py-2",children:[e.jsx("div",{className:"font-bold text-black text-l mb-1 line-clamp-1",children:t.name}),e.jsx("div",{className:"text-gray-600 text-sm line-clamp-1",children:t.artists.map(n=>n.name).join(", ")})]})]},a))})}),s&&e.jsx("div",{className:"container mx-auto px-4 mb-8",children:e.jsxs("div",{className:"max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg relative mb-4 grid grid-cols-12",children:[e.jsx("div",{className:"col-span-8 p-4 flex flex-col justify-between",children:e.jsxs("form",{onSubmit:y,children:[e.jsx("div",{className:"text-xl font-bold",children:s.title}),e.jsxs("div",{className:"text-md mb-2 text-gray-500",children:[" ","by"," ",e.jsx("span",{className:"font-bold",children:s.artist})]}),e.jsx("textarea",{className:"text-sm border-2 border-gray-300 w-full p-2 mb-2 rounded-lg",placeholder:"Type your description here",value:s.description,onChange:t=>x({...s,description:t.target.value}),style:{resize:"none",height:"80px"}}),e.jsx("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-2 rounded",children:"Submit"})]})}),e.jsx("div",{className:"col-span-4",children:e.jsx("img",{className:"w-full h-full object-cover",src:s.album_cover,alt:s.title})})]})}),e.jsx(T,{posts:b}),g&&e.jsx(_,{onClose:()=>j(!1)})]})}export{O as default};
