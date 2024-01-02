import {Editor} from "@tiptap/react";
import {
    Bold,
    Code,
    GanttChartSquare,
    Heading1,
    Heading2, Heading3,
    Heading4,
    Italic,
    Redo,
    Strikethrough,
    Undo
} from "lucide-react";

function MenuButton({isActive, onClick, disabled, children}: {isActive: boolean, onClick: () => void, disabled: boolean, children?: JSX.Element}) {
    const className = disabled ? "text-zinc-300" :
        isActive ? "text-blue-600" : "text-zinc-600";

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={className + " " + "p-2"}
        >
            {children}
        </button>
    );
}

function MenuSection({children} : { children : JSX.Element | JSX.Element[] }) {
    return (
        <div className="inline border-e last:border-none">
            {children}
        </div>
    );
}

function HeadingSection({editor}: { editor: Editor }) {
    return (
        <MenuSection>
            <MenuButton
                isActive={editor.isActive('heading', {level: 1})}
                onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleHeading({level: 1})
                        .run()
                }
            >
                <Heading1 size={14} />
            </MenuButton>
            <MenuButton
                isActive={editor.isActive('heading', {level: 2})}
                onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleHeading({level: 2})
                        .run()
                }
            >
                <Heading2 size={14} />
            </MenuButton>
            <MenuButton
                isActive={editor.isActive('heading', {level: 3})}
                onClick={() => editor.chain().focus().toggleHeading({level: 3}).run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleHeading({level: 3})
                        .run()
                }
            >
                <Heading3 size={14} />
            </MenuButton>
            <MenuButton
                isActive={editor.isActive('heading', {level: 4})}
                onClick={() => editor.chain().focus().toggleHeading({level: 4}).run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleHeading({level: 4})
                        .run()
                }
            >
                <Heading4 size={14} />
            </MenuButton>
        </MenuSection>
    )
}

function UndoRedoSection({editor}: { editor: Editor }) {
    return (
        <MenuSection>
            <MenuButton
                isActive={false}
                onClick={() => editor.chain().focus().undo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .undo()
                        .run()
                }
            >
                <Undo size={14} />
            </MenuButton>
            <MenuButton
                isActive={false}
                onClick={() => editor.chain().focus().redo().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .redo()
                        .run()
                }
            >
                <Redo size={14} />
            </MenuButton>
        </MenuSection>
    )
}

function TextFormatSection({editor}: {editor: Editor}) {
    return (
        <MenuSection>
            <MenuButton
                isActive={editor.isActive('italic')}
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleItalic()
                        .run()
                }
            >
                <Italic size={14} />
            </MenuButton>
            <MenuButton
                isActive={editor.isActive('bold')}
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleBold()
                        .run()
                }
            >
                <Bold size={14} />
            </MenuButton>
            <MenuButton
                isActive={editor.isActive('strike')}
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleStrike()
                        .run()
                }
            >
                <Strikethrough size={14} />
            </MenuButton>
            <MenuButton
                isActive={editor.isActive('code')}
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCode()
                        .run()
                }
            >
                <Code size={14} />
            </MenuButton>
            <MenuButton
                isActive={editor.isActive('codeBlock')}
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                disabled={
                    !editor.can()
                        .chain()
                        .focus()
                        .toggleCodeBlock()
                        .run()
                }
            >
                <GanttChartSquare size={14} />
            </MenuButton>
        </MenuSection>
    );
}

export default function MenuBar({editor} : { editor: Editor}) {
    if (!editor) {
        return <></>
    }

    return <div className="border-b border-zinc-400 overflow-auto">
        <UndoRedoSection editor={editor} />
        <HeadingSection editor={editor} />
        <TextFormatSection editor={editor} />
    </div>
}
