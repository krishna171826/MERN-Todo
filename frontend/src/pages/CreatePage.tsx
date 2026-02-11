import {  ArrowBigLeft  } from 'lucide-react';
import  { useState  } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router';
import { api } from '../lib/axios';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);  
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      toast.error('Please fill in both title and content');
    }

    setLoading(true);
    try {
      await api.post('/notes', { title, content });
      toast.success('Note created successfully');
      setTitle('');
      setContent('');
      navigate('/');
      
    } catch (error) {
      toast.error('Failed to create note');
      console.error('Error creating note:', error);
    }finally{
      setLoading(false);
    }
    
  } 


  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <Link to='/' className='btn btn-ghost mb-6'>
        <ArrowBigLeft className='size-5' />
        Back to Home</Link>

        <div className='card bg-base-100 '>
          <div className='card-body'>
            <h2 className='card-title text-2xl mb-4'>Create a New Note</h2>
            <form onSubmit={handleSubmit}>
            <div className='form-control mb-4'>
                <label className='label'>
                  <span className='label-text'>Title</span>
                </label>
                <input type='text' value={title} placeholder='Note Title' onChange={(e) => setTitle(e.target.value)} 
                className='input input-bordered'></input>
            </div>

            <div className='form-control mb-4'>
              <label className='label'>
                <span className='label-text'>Content</span>
              </label>
              <textarea value={content} placeholder='Note Content' onChange={(e) => setContent(e.target.value)} 
              className='textarea textarea-bordered h-60'></textarea>

            </div>

            <div className='card-actions justify-end'>
              <button type='submit' className='btn btn-primary' disabled={loading}>
                {loading ? 'Creating...' : 'Create Note'}
              </button>
            </div>

            </form>
          
          </div>
        </div>


      </div>
    </div>
  )
}

export default CreatePage