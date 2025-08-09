const StudyCardText = ({ title, content }) => {
    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
            {title && <h3 className="text-xl font-semibold text-indigo-600 mb-2">{title}</h3>}
            <div className="text-gray-700 whitespace-pre-line">{content}</div> {/* ¡Cambiar de <p> a <div>! */}
        </div>
    );
};

export default StudyCardText;
