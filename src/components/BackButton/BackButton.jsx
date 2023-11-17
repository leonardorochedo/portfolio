import { Link } from "react-router-dom";

import './BackButton.css';

export function BackButton() {

    const text = "<- Voltar"

    return (
        <div className="button-back">
            <Link to="/" style={{textDecoration: 'none'}}>
                <button>
                    {text}
                </button>
            </Link>
        </div>
    )
}