import {readdir,readFile,access} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../dist/',import.meta.url));
async function walk(dir){const list=[];for(const item of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,item.name);if(item.isDirectory())list.push(...await walk(p));else list.push(p);}return list;}
let errors=[];const files=await walk(root);const pages=files.filter(p=>p.endsWith('.html'));
for(const file of pages){const html=await readFile(file,'utf8');for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){const ref=match[1];if(/^(https?:|mailto:|tel:|data:)/.test(ref))continue;const [target,anchor]=ref.split('#');const resolved=target?path.resolve(path.dirname(file),target):file;try{await access(resolved);if(anchor&&resolved.endsWith('.html')){const targetHtml=await readFile(resolved,'utf8');if(!targetHtml.includes('id="'+anchor+'"'))errors.push(`${file}: missing anchor ${ref}`);}}catch{errors.push(`${file}: missing ${ref}`);}}}
if(pages.length!==8)errors.push('Expected homepage plus seven detail pages');
if(errors.length){console.error(errors.join('\n'));process.exitCode=1;}else console.log(`PASS: ${pages.length} pages; all local images, links and anchors resolve.`);
