"use client"

function ViewLog() {
    return (
        <div className="mx-auto text-center hover:scale-105 transition-all duration-300 ease-in-out">
            <button onClick={() => { window.location.reload() }} className="bg-Night/90 rounded-lg p-4 font-montserrat font-semibold text-goldenRod">View full log</button>
        </div>
    )
}

export default ViewLog