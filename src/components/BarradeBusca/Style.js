import styled from "styled-components";

const BBusca = styled.div`
    .divContainer {
        align-self: center;
        margin-top: -5.1em;
        filter: drop-shadow(0 0 0.75rem var(--primaria));
        padding: 1.5em 1.3em;
        border-radius: .9em;
        background-color: var(--background)
    }

    .search{
        position: relative;
        padding: 1.2rem;
        padding-left: 1.5rem;
        min-width: 40rem;
        background-color: var(--detalhe);
        text-decoration: none;
        color: var(--primaria);
        border-radius: .9em;
        font-weight: 600;
        border:1px solid grey;
        text-align:left;
        &:hover {
            background-color: var(--detalhe);
            border: 1px solid grey;
        }

    }
`

export {BBusca};