import { Box, Typography, Stack, Grid } from '@mui/material'
import Card from './Card'

export default function InitialChat({ generateResponse }) {

    const initialData = [
        {
            heading: 'Can you explain RESTful APIs?',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'What is a Promise in JavaScript?',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'How do you handle errors in async/await?',
            subtext: 'Get immediate AI generated response'
        },
        {
            heading: 'What is the virtual DOM?',
            subtext: 'Get immediate AI generated response'
        },
    ]


    return (
        <Stack height={1} justifyContent={'flex-end'} p={{ xs: 2, md: 3 }}>
            <Stack
                alignItems={'center'}
                spacing={2}
                my={5}
            >
                <Typography variant='h4'>
                    How Can I Help You Today?
                </Typography>
            </Stack>
            <Grid container spacing={{ xs: 1, md: 3 }}>
                {initialData.map(item => (
                    <Grid item key={item.heading} xs={12} md={6}>
                        <Card heading={item.heading} text={item.subtext} handleClick={generateResponse} />
                    </Grid>
                ))}
            </Grid>
        </Stack>
    )
}