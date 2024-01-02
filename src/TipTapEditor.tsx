import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import {Editor, EditorContent} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

import MenuBar from "./TipTapMenuBar.tsx";

import './TipTap.css'

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    // @ts-ignore
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: {
            keepMarks: true,
            keepAttributes: false,
        },
        orderedList: {
            keepMarks: true,
            keepAttributes: false,
        },
    }),
]

const content = `
    <h2>Hi there!</h2>
    
    <p>
        That is a simple sample of <strong>Tauri</strong>
         and <strong>TipTap React</strong> integration.
    </p>
    
    <p>
        This example uses <em>Tailwind</em>, and <em>tailwind/typography</em>, but
        everything can be build with plain css.
    </p>
`;

export default function TipTap() {
    const editor = new Editor({
        content,
        extensions,
        editorProps: {
            attributes: {
                class: 'prose focus:outline-none',
            },
        },
    })
    
    return (
        <div className="w-full h-full bg-white shadow-lg border border-zinc-400 rounded-md focus-within:border-blue-400">
            <MenuBar editor={editor} />
            <EditorContent editor={editor}>
            </EditorContent>
        </div>
    );
}