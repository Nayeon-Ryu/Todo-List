import {format} from 'date-fns'

export default function Date({dateString}) {
    const date = dateString.toDate()// parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}