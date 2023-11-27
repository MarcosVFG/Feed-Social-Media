import styles from './Post.module.css';
import { Comment } from './Comment';
import { Avatar } from './Avatar';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content {
    type: string;
    content: string;
}

interface PostProps {
    author: Author;
    publishedAt: Date;
    content: Content[];
}

export function Post ({ author , publishedAt , content }: PostProps) {

    const [comments, setComments] = useState(['Gostei!']);

    const [newCommentText, setNewCommentText] = useState('');

    const publishedAtFormatted = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('');
    }

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewCommentText(event.target.value);
    }

    function deleteComment(commentToDelete: string) {
        const commentsWhithoutDeletedOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWhithoutDeletedOne)
    }

    function handleNewCommentInvalid (event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    const isNewCommentEmpty = newCommentText.length == 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                    src={author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title="06 de Novembro às 20:24h" dateTime={publishedAt.toISOString()}>
                    {publishedAtFormatted}
                </time>
            </header>

            <div className={styles.content}>
                {content.map (line => {
                    if (line.type == 'paragraph' ) {
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type === 'link') {
                        return <p key={line.content}><a href="https://github.com/MarcosVFG" target="_blank">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                  name="comment"
                  placeholder="Deixe um comentário"
                  value={newCommentText} 
                  onChange={handleNewCommentChange}
                  onInvalid={handleNewCommentInvalid}
                  required 
                />
                
                <footer>
                    <button type="submit" disabled={isNewCommentEmpty}> Comentar </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                    <Comment 
                        content={comment} 
                        key={comment}
                        onDeleteComment={deleteComment}
                    />
                    )
                })}
            </div>
        </article>
    );
}