import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Car } from 'lucide-react';

export default function MediaCard(props) {
    var newsData = props.data;
    const { title, url, sumarize, urlToImage, sentimentLabels, author } = newsData
    return (
        <Card className='flex flex-col justify-between' sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={urlToImage || ''}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h7" className='text-xl font-semibold' component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {sumarize}
                </Typography>
                <div className="py-2">
                    <div className={`mt-2 ${sentimentLabels.toLowerCase() == "negative" ? 'bg-red-200 text-red-800 border' : 'bg-green-200 border text-green-800'} flex items-center w-fit px-2 rounded-full`}>
                        <span className='text-sm pb-1'>{sentimentLabels.toLowerCase()}</span>
                    </div>
                </div>

                <Typography>{author}</Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small"><a href={url}>Learn More</a></Button>
            </CardActions>
        </Card>
    );
}
