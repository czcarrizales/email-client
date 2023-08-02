import Skeleton from 'react-loading-skeleton'
import './CardSkeleton.css'

interface Cards {
    cards: any;
}

const CardSkeleton = ({ cards }: Cards) => {
    
    return (
        Array(cards).fill(0).map(_item => (
            <div className='card-skeleton row d-flex align-items-center justify-content-center'>
                <div className="col-3 d-flex align-items-center justify-content-center">
                    <Skeleton width={60} height={60} />
                </div>
                <div className="col-6">
                    <Skeleton count={3} />
                </div>
                <div className="col-3">
                    <Skeleton count={2} />
                </div>
            </div>
        ))

    )
}

export default CardSkeleton