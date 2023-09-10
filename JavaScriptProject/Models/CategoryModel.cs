using System.Collections;

namespace JavaScriptProject.Models
{
    public class CategoryModel:IEnumerator
    {
        public int idCategory { get; set; }
        public string strCategory { get; set; }
        public string strCategoryThumb { get; set; }
        public string strCategoryDescription { get; set; }
        public List<CategoryModel>? Categories { get; set; }

        public object Current => throw new NotImplementedException();

        public bool MoveNext()
        {
            throw new NotImplementedException();
        }

        public void Reset()
        {
            throw new NotImplementedException();
        }
    }
}