import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { Container, Row, List, Table, Found } from './styles';
import Game from '../Game';
interface CrosswordsInterface extends Game {
    crosswords: Array<Array<String>>;
    answers: Array<String>
    finders: Array<String>
}


const Crosswords: React.FC<CrosswordsInterface> = ({ crosswords, answers, onEnd, finders }) => {
    const [rightAnswer, setRightAnswer] = useState<String[]>([])
    const [word, setWord] = useState<string>('')
    const [clicked, setClicked] = useState<HTMLLIElement[]>([])
    const [isHolding, setIsHolding] = useState(false)

    useEffect(() => {
        let test: boolean = true;
        answers.forEach((a) => {
            if (rightAnswer.indexOf(a) === -1) {
                console.log(a)
                test = false;
            }
        });
        if (test) {
            toast.dark('PARABÉNS DOUTOR, VC GANHOU', { position: 'bottom-right' })
            onEnd && onEnd(true)
            restart()
        }
    }, [rightAnswer, answers, onEnd])
    function restart() {
        window.location.href = '/';
    }
    async function handleRightAnswer(word: string) {
        setWord('')
        setClicked([]);
        if (rightAnswer.indexOf(word) === -1) {
            toast.success('Palavra correta! ' + word, { position: 'bottom-right' });
            const newArray = [...rightAnswer];
            newArray.push(word)
            setRightAnswer(newArray);
        }
    }

    function handleStartAnswer(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        setIsHolding(true)
        handleCross(e, true);
    }

    async function handleCross(e: React.MouseEvent<HTMLLIElement, MouseEvent>, go?: boolean) {
        const a = e.target as HTMLLIElement;
        if (a.style.backgroundColor === 'green') {
            if (isHolding || go) {
                if (clicked.indexOf(a) === -1) {
                    a.style.backgroundColor = "green"
                    setWord(word ? word + a.innerHTML : "" + a.innerHTML);
                    setClicked([...clicked, a]);
                }
            }
        }
    }
    function handleVerifyAnswer() {
        setIsHolding(false)
        if (word) {
            if (answers.indexOf(word) !== -1) {
                handleRightAnswer(word)
            } else {
                toast.error('Palavra incorreta', { position: 'bottom-right' });
                reset()
            }
        }
    }
    function reset() {
        clicked.forEach((e) => {
            e.style.backgroundColor = 'white'
            setWord('')
            setClicked([]);
        })
    }
    return (
        <Container>
            <Table>
                <span>Biologia - Sistemas do corpo humano</span>
                <ul>
                    {finders.map((finder, index) => (
                        <li>{(index + 1) + "-" + finder}</li>
                    ))}
                </ul>
            </Table>
            <Found>
                <span>Respostas Corretas</span>
                <ul>
                    {rightAnswer.map((a) => (
                        <li>{a}</li>
                    ))}
                </ul>
            </Found>
            <List>
                {crosswords.map((list, index) => (
                    < Row key={index}>
                        {
                            list.map((word, i) => (
                                <li key={i} onMouseDown={handleStartAnswer} onMouseEnter={handleCross} onMouseUp={handleVerifyAnswer}>{word}</li>
                            ))
                        }
                    </Row>
                ))
                }
            </List >
        </Container>
    );
}

export default Crosswords;