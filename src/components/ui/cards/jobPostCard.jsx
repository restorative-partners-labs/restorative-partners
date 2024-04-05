import Link from 'next/link'
import ButtonFill from '../buttons/buttonFill'

const JobPostCard = ({id, time, job_name, location, date_line, level, salary, link}) => {
    return (
        <li className='bg-secondary grid lg:grid-cols-[8%_25%_20%_20%_auto] lg:gap-y-0 gap-y-6 justify-between items-center mb-7.5 py-8 px-7.5 border border-primary'>
            <svg strokeWidth="1" className="h-[65px] w-20 relative -top-2  left-0 xl:text-6xl text-5xl inline-block font-extrabold leading-120 stroke-primary stroke-dasharray-1000 stroke-dashoffset-1000 animate-text-line-animation"><text x="0%" dominantBaseline="middle" y="70%">{id}</text></svg>
            <div className='max-w-72 w-full'>
                <strong className='text-primary-foreground'>{time}</strong>
                <h2 className='text-2xl font-bold leading-160 text-primary-foreground'>{job_name}</h2>
            </div>
            <div>
                <strong className='text-primary-foreground'>{location}</strong>
                <p className='text-primary-foreground'> <span>Apply before:</span> <span className='font-bold whitespace-nowrap'>{date_line}</span> </p>
            </div>
            <div>
                <strong className='text-primary-foreground'>{level}</strong>
                <p className='text-primary-foreground flex gap-2'> <span>{salary.range}</span>/ <span className='font-bold'>{salary.time}</span></p>
            </div>
            <Link href={link}> <ButtonFill className={"px-7.5 py-2.5"}>Apply Now</ButtonFill> </Link>
        </li>
    )
}

export default JobPostCard