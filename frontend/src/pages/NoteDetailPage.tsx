import { Link, useNavigate, useParams } from 'react-router';
import { api } from '../lib/axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Loader2Icon, LucideArrowBigLeft, Trash2Icon } from 'lucide-react';

type Note = {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
};

const NoteDetailPage = () => {
  const [note,setNote] = useState<Note | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        toast.error('Failed to fetch note details');
        console.log('Error fetching note:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);


  if (loading) {
    return (
    <div className='min-h-screen bg-base-200 flex items-center justify-center'>
      <Loader2Icon className='animate-spin size-10 ' />
    </div>
    );
  }


  const handleDelete = async () => {
    if (!note) return;

    const confirmDelete = window.confirm('Are you sure you want to delete this note?');
    if (!confirmDelete) return;

    try {
      await api.delete(`/notes/${note._id}`);
      toast.success('Note deleted successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to delete note');
      console.log('Error deleting note:', error);
    }

  }

  const handleSave = async () => {
    if (!note?.title.trim() || !note?.content.trim() ) {
      toast.error('Please fill in both title and content');
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${note._id}`, {
        title: note.title,
        content: note.content,
      });
      toast.success('Note updated successfully');
      navigate('/');
    } catch (error) {
      toast.error('Failed to update note');
      console.log('Error updating note:', error);
    } finally {
      setSaving(false);
    }
  };

  console.log(note);

  return (
    <div className="min-h-screen bg-base-200 "> 
      <div className='container mx-auto px-4 py-8'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex items-center justify-between mb-6'>
            <Link to="/" className='btn btn-ghost'>
            <LucideArrowBigLeft className='w-5 h-5'/> Back to Notes</Link>
            <button  className='btn btn-error btn-outline' onClick={() => handleDelete()}>
              <Trash2Icon className='w-5 h-5'/>Delete Note
            </button>

          </div>

            {note ? (
              <div className='card bg-base-100'>
                <div className='card-body'>
                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>Title</span>
                    </label>
                    <input
                      type='text'
                      className='input input-bordered'
                      value={note.title}
                      onChange={(e) => setNote({ ...note, title: e.target.value })}
                    />
                  </div>

                  <div className='form-control mb-4'>
                    <label className='label'>
                      <span className='label-text'>Content</span>
                    </label>
                    <textarea
                      className='textarea textarea-bordered min-h-80'
                      value={note.content}
                      onChange={(e) => setNote({ ...note, content: e.target.value })}
                    />
                  </div>

                  <div className='card-actions justify-end'>
                    <button
                      className={`btn btn-primary ${saving ? 'loading' : ''} `}
                      onClick={() => handleSave()}
                      disabled={saving}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>Note not found.</div>
            )}
        </div>
      </div>
    </div>
  
  );
};


export default NoteDetailPage;