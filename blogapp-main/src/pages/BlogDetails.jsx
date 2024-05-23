import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import useBlogRequests from '../services/useBlogRequests';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import { BiLike } from "react-icons/bi";
import { GoCommentDiscussion } from "react-icons/go";
import { GrView } from "react-icons/gr";
import IconComp from '../components/IconComp';

export default function BlogDetails() {
    const { id } = useParams();
    const defaultImage = "https://geekflare.com/wp-content/uploads/2016/04/featured-image-generator.jpg";
    const defaultAuthorImage = "https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png";
    
    
    const { getBlogDetails,getUsers } = useBlogRequests();
    const { blogDetails: blog, users,loading } = useSelector(state => state.blogs);

    useEffect(() => {
        getBlogDetails(id);
        getUsers()
    }, []);
    console.log("blogdetails25", blog)

    
    if (!blog) return null;

    const author = users.find(user => user._id === blog?.userId?._id) || {};
    // console.log(author)

    return (
        <Container maxWidth="lg">
            <Box mt={12} display="flex" justifyContent="center">
                <Card sx={{ maxWidth: 800, width: '100%' }}>
                    <Box component="img"
                        src={blog.image || defaultImage}
                        alt={blog.title}
                        sx={{ width: '100%', height: 300, objectFit: 'cover' }}
                        onError={(e) => { e.target.src = defaultImage; }}
                    />
                    <CardContent>
                        <Box display="flex" alignItems="center" mb={2}>
                            <Avatar
                                src={author.image || defaultAuthorImage}
                                alt={author.username || "Unknown User"}
                                sx={{ width: 50, height: 50 }}
                            />
                            <Box ml={2}>
                                <Typography variant="h6" component="div">
                                    {author.username || "Unknown User"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {new Date(blog.createdAt).toLocaleDateString()}
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="h4" component="h1" gutterBottom>
                            {blog.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" paragraph>
                            {blog.content}
                        </Typography>
                        {/* <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                            <Box display="flex" alignItems="center" gap={2}>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <BiLike onClick={handleLike} className={`scale-125 ${
                      blog?.likes?.includes(currentUserId) ? "text-red-600" : ""
                    }`} style={{ cursor: 'pointer' }} />
                                    <Typography variant="body2">{blog?.likes?.length}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <GoCommentDiscussion style={{ cursor: 'pointer' }} />
                                    <Typography variant="body2">{blog?.comments?.length}</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" gap={1}>
                                    <GrView />
                                    <Typography variant="body2">{blog.countOfVisitors}</Typography>
                                </Box>
                            </Box>
                            {currentUserId===blog?.userId?._id && <Button variant="contained" component={Link} to="#">
                                Edit Blog
                            </Button>}
                            
                        </Box> */}
                        {/* {blog?.length>0&&<IconComp users={users} blog={blog} inBlog={true}/>} */}
                        <IconComp users={users} blog={blog} inBlog={true}/>
                        
                    </CardContent>
                </Card>
            </Box>
        </Container>
    );
}
